using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public interface IQilinService
    {
        IEnumerable<Tag> GetTags();

        Task<IEnumerable<Entity>> GetEntitiesAsync();

        Task<bool> CreateTag(string tagTitle, string? tagDescription);

        Task<bool> DeleteTag(Guid tagId);
    }
}
