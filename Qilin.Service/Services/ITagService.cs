using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public interface ITagService
    {
        Task<Tag[]> GetTagsAsync();
        Task<IActionResult> CreateTag(string tagTitle, string? tagDescription);
        Task<IActionResult> DeleteTag(Guid tagId);
    }
}
