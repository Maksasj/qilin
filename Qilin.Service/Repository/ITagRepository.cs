using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface ITagRepository
    {
        IEnumerable<Tag> GetTags();
        Task<Tag> GetTagByTitleAsync(string title);

        Task<Tag> GetTagAsync(Guid tagId);

        Task<bool> CreateTagAsync(Tag tag);

        Task<bool> DeleteTagAsync(Guid tagId);

        bool HasTag(Guid tagId);
    }
}
