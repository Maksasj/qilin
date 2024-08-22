using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IEntityRepository
    {
        IEnumerable<Entity> GetEntities();

        Task<bool> CreateEntity(Entity entity);

        Task<bool> DeleteEntity(Guid tagId);
    }
}
