using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface ITagStyleRepository
    {
        Task<TagStyle> GetStyleAsync(Guid styleId);

        Task<TagStyle> GetStyleAsync(string styleTitle);

        Task<bool> CreateStyleAsync(TagStyle tagStyle);

        Task<TagStyle> GetTagStyleAsync(Tag tag);
    }
}
