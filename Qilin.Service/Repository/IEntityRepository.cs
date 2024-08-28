using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IEntityRepository
    {
        Task<bool> CreateEntityAsync(Entity entity);

        bool HasEntity(Guid entityId);

        Task<bool> DeleteEntity(Guid entityId);

        IEnumerable<Entity> GetEntities();

        Task<bool> DeleteAllEntitiesAsync();
    }
}
