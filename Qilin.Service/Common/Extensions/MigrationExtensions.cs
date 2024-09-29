using Microsoft.EntityFrameworkCore;
using Qilin.Service.Data;

namespace Qilin.Service.Common.Extensions;

public static class MigrationExtensions
{
    public static void ApplyMigrations(this IApplicationBuilder app)
    {
        using IServiceScope scope = app.ApplicationServices.CreateScope();

        using QilinDbContext dbContext = scope.ServiceProvider.GetRequiredService<QilinDbContext>();

        dbContext.Database.Migrate();
    }
}
