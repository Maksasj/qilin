namespace Qilin.Service.Common
{
    public class MochiLoggerProvider : ILoggerProvider
    {
        private HttpClient _httpClient { get; set; }

        public MochiLoggerProvider()
        {
            _httpClient = new HttpClient();
        }

        public ILogger CreateLogger(string categoryName)
        {
            return new MochiLogger(_httpClient);
        }

        public void Dispose()
        {

        }
    }
}
