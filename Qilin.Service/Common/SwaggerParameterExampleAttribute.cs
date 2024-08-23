namespace Qilin.Service.Common
{
    [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = true)]
    public class SwaggerParameterExampleAttribute : Attribute
    {
        public object Example { get; set; }
    }
}
