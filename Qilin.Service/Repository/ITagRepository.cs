using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface ITagRepository
    {
        Task<bool> CreateTagAsync(Tag tag);

        Task<Tag> GetTagAsync(Guid tagId);

        Task<bool> DeleteTagAsync(Guid tagId);

        bool HasTag(Guid tagId);

        IEnumerable<Tag> GetTags();

        Task<bool> DeleteTagsAsync(IEnumerable<Tag> tags);
    }
}
