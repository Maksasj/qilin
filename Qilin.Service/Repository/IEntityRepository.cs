using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public interface IEntityRepository
    {
        Task<bool> CreateEntityAsync(Entity entity);

        Task<bool> DeleteEntity(Guid tagId);

        IEnumerable<Entity> GetEntities();

        Task<bool> DeleteAllEntitiesAsync();
    }
}
