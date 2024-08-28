using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public interface IQilinService
    {
        Task<IEnumerable<Tag>> GetTagsAsync();

        Task<IEnumerable<Entity>> GetEntitiesAsync();

        Task<bool> CreateTag(string tagTitle, string? tagDescription);

        Task<bool> DeleteTag(Guid tagId);
    }
}
