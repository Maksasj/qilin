using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public interface IQilinService
    {
        Task<IEnumerable<Entity>> GetEntitiesAsync();

        Task<Entity> GetEntityAsync(Guid entityId);

        IEnumerable<Tag> GetTags();

        Task<Tag> GetTagAsync(Guid tagId);

        Task<bool> CreateTag(string tagTitle, string? tagDescription);

        Task<bool> DeleteTag(Guid tagId);

        IEnumerable<TagRelation> GetTagRelations();

        Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId);

        Task<bool> TagEntityAsync(Guid targetEntityId, Guid toBeAppliedTagId);

        Task<IEnumerable<Tag>> GetEntityTagsAsync(Guid entityId);
        
        Task<TagStyle> GetTagStyleAsync(Tag tag);
    }
}
