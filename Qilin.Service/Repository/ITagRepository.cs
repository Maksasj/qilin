using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface ITagRepository
    {
        IEnumerable<Tag> GetTags();
        Task<bool> AddTag(Tag tag);
    }
}
