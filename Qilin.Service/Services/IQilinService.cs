using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public interface IQilinService
    {
        Task<Tag[]> GetTagsAsync();
        
        Task<bool> CreateTag(string tagTitle, string? tagDescription);

        Task<bool> DeleteTag(Guid tagId);

        Task<Entity[]> GetEntitiesAsync();
    }
}
