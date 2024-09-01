using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IRelationRepository
    {
        IEnumerable<TagRelation> GetAllTagRelations();

        IEnumerable<EntityTagRelation> GetAllEntityRelations();

        IEnumerable<TagRelation> GetTagRelations(Guid tagId);

        IEnumerable<EntityTagRelation> GetEntityRelations(Guid entityId);

        Task<bool> DeleteRelationsForAsync(Tag tag);

        /* A <- B */
        /* A is tag, B is parent, A is tagged with B */
        bool TagRelationExist(Guid tagId, Guid parentId);

        bool EntityRelationExist(Guid entityId, Guid tagId);

        Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId);

        Task<bool> TagEntityAsync(Guid targetEntityId, Guid toBeAppliedTagId);
    }
}
