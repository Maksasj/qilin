using Microsoft.EntityFrameworkCore;
using Qilin.Service;
using Qilin.Service.Common;
using Qilin.Service.Common.Swagger;
using Qilin.Service.Data;
using Qilin.Service.Repository;
using Qilin.Service.Services;
using Qilin.Service.Services.Hoo;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAllOrigins",
        configurePolicy: policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.EnableAnnotations();

    options.ParameterFilter<SwaggerParameterExampleFilter>();
});

builder.Services.AddDbContext<QilinDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<ITagRepository, TagRepository>();
builder.Services.AddScoped<IEntityRepository, EntityRepository>();

builder.Services.AddTransient<IHooService, HooService>();
builder.Services.AddTransient<IQilinService, QilinService>();

builder.Logging.ClearProviders();
builder.Logging.AddProvider(new MochiLoggerProvider());

var app = builder.Build();

app.UseCors("AllowAllOrigins");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    await SeedData.InitializeAsync(app.Logger, scope.ServiceProvider);
}

app.Run();
