using Newtonsoft.Json;
using Qilin.Service.Models.Hoo;
using System.Net.Http;

namespace Qilin.Service.Services.Hoo.Client
{
    public class HooFileCollection : IHooFileCollection
    {
        private HttpClient _httpClient { get; set; }

        public HooFileCollection(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async IAsyncEnumerator<HooFileModel> GetAsyncEnumerator()
        {
            var pageIndex = 0;
            var response = await GetFilesPage(pageIndex, 100);

            do
            {
                string apiResponse = await response.Content.ReadAsStringAsync();
                var page = JsonConvert.DeserializeObject<HooFilePageResponseModel>(apiResponse);

                if(page.Files.Length == 0)
                    break;

                foreach (var file in page.Files)
                    yield return file;

                ++pageIndex;
                response = await GetFilesPage(pageIndex, 100);
            } while (response != null);
        }

        private async Task<HttpResponseMessage> GetFilesPage(int pageIndex, int itemitemsPerPage)
        {
            return await _httpClient.GetAsync($"https://localhost:7256/GetFiles?pageIndex={pageIndex}&itemsPerPage={itemitemsPerPage}");
        }
    }
}
