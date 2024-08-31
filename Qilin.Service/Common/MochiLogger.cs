namespace Qilin.Service.Common
{
    public class MochiLogger : ILogger
    {
        private HttpClient _httpClient;

        public MochiLogger(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return new NoopDisposable();
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            var message = formatter(state, exception);

            _httpClient.PostAsJsonAsync($"https://localhost:7098/Log", new MochiLogMessageModel
            {
                MessageLogLevel = logLevel,
                SourceName = "Qilin.Service",
                Message = message,
                SendAt = DateTimeOffset.Now, 
            });
        }

        private class NoopDisposable : IDisposable
        {
            public void Dispose()
            {

            }
        }
    }
}
