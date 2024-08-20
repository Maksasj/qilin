using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public class TagService : ITagService
    {
        public async Task<Tag[]> GetTagsAsync()
        {
            return new Tag[] { };
        }

        public async Task<IActionResult> CreateTag(string tagTitle, string? tagDescription)
        {
            return new OkObjectResult(null);
        }
    }
}
