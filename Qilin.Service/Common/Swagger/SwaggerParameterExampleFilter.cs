using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Data.Common;
using System.Reflection;
using System.Reflection.Metadata;
using Microsoft.AspNetCore.Mvc.Formatters;
using System;

namespace Qilin.Service.Common.Swagger
{
    public class SwaggerParameterExampleFilter : IParameterFilter
    {
        private readonly ILogger<SwaggerParameterExampleFilter> _logger;

        public SwaggerParameterExampleFilter(ILogger<SwaggerParameterExampleFilter> logger) : base()
        {
            _logger = logger;
        }

        public void Apply(OpenApiParameter paramater, ParameterFilterContext context)
        {
            var attributes = context.ApiParameterDescription
                .CustomAttributes()
                .Where(x => x.GetType() == typeof(SwaggerParameterExampleAttribute))
                .Select(attribute => (SwaggerParameterExampleAttribute)attribute).ToList();

            for (int i = 0; i < attributes.Count; i++)
            {
                var attribute = attributes[i];
                OpenApiExample openApiExample = null;

                if (attribute.Example.GetType() == typeof(string))
                {
                    openApiExample = new OpenApiExample()
                    {
                        Value = new OpenApiString((string)attribute.Example)
                    };
                }
                else
                {
                    openApiExample = (OpenApiExample)attribute.Example;
                }

                paramater.Examples.Add("Example " + (i + 1), openApiExample);
            }

        }
    }
}
