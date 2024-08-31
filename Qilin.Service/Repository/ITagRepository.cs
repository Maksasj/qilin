using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface ITagRepository
    {
        Task<bool> CreateTagAsync(Tag tag);

        Task<Tag> GetTagAsync(Guid tagId);

        Task<Tag> GetTagByTitleAsync(string title);

        Task<bool> DeleteTagAsync(Guid tagId);

        bool HasTag(Guid tagId);

        IEnumerable<Tag> GetTags();

        IEnumerable<TagRelation> GetTagRelations();

        Task<bool> DeleteRelationsForAsync(Tag tag);

        Task<bool> DeleteRelationsForManyAsync(IEnumerable<Tag> tags);

        Task<bool> DeleteTagsAsync(IEnumerable<Tag> tags);

        /* A <- B */
        /* A is tag, B is parent, A is tagged with B */
        bool RelationExist(Guid tagId, Guid parentId);

        Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId);
    }
}
