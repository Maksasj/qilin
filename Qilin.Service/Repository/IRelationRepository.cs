using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IRelationRepository
    {
        IEnumerable<TagRelation> GetTagRelations();

        Task<bool> DeleteRelationsForAsync(Tag tag);

        Task<bool> DeleteRelationsForManyAsync(IEnumerable<Tag> tags);

        Task<bool> DeleteTagsAsync(IEnumerable<Tag> tags);

        /* A <- B */
        /* A is tag, B is parent, A is tagged with B */
        bool TagRelationExist(Guid tagId, Guid parentId);

        bool EntityRelationExist(Guid entityId, Guid tagId);

        Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId);

        Task<bool> TagEntityAsync(Guid targetEntityId, Guid toBeAppliedTagId);
    }
}
