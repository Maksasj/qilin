using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IEntityRepository
    {
        Task<bool> CreateEntityAsync(Entity entity);

        Task<Entity> GetEntityAsync(Guid entityId);
        
        Task<bool> DeleteEntityAsync(Guid entityId);

        bool HasEntity(Guid entityId);

        IEnumerable<Entity> GetEntities();

        Task<bool> DeleteEntitiesAsync(IEnumerable<Entity> entities);
    }
}
