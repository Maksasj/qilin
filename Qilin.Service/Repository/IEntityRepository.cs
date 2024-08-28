using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IEntityRepository
    {
        Task<bool> CreateEntity(Entity entity);

        Task<bool> DeleteEntity(Guid tagId);

        IEnumerable<Entity> GetEntities();

        Task<bool> DeleteAllEntitiesAsync();
    }
}
