namespace Qilin.Service.Common
{
    public class MochiLogMessageModel
    {
        public LogLevel MessageLogLevel { get; set; }

        public string SourceName { get; set; }

        public string Message { get; set; }

        public DateTimeOffset SendAt { get; set; }
    }
}
