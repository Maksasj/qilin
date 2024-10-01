using System.Net;
using Qilin.Service.Models.Hoo;

namespace Qilin.Service.Services.Hoo.Client
{
    public class HooClient : IHooClient
    {
        private HttpClient _httpClient { get; set; }

        public HooClient()
        {
            _httpClient = new HttpClient();
        }

        public IHooFileCollection GetFilesAsync()
        {
            return new HooFileCollection(_httpClient);
        }
    }
}
