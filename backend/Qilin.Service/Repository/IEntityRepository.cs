using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IEntityRepository
    {
        IEnumerable<Entity> GetEntities();

        Task<bool> DeleteEntitiesAsync(IEnumerable<Entity> entities);

        Task<bool> CreateEntityAsync(Entity entity);

        Task<Entity> GetEntityAsync(Guid entityId);
        
        Task<bool> DeleteEntityAsync(Guid entityId);

        bool HasEntity(Guid entityId);
    }
}
