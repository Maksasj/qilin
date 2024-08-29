using Microsoft.EntityFrameworkCore;
using Qilin.Service.Controllers;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class EntityRepository : IEntityRepository
    {
        private readonly ILogger<EntityRepository> _logger;
        private readonly QilinDbContext _context;

        public EntityRepository(ILogger<EntityRepository> logger, QilinDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public async Task<bool> CreateEntityAsync(Entity Entity)
        {
            _context.Entities.Add(Entity);

            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }

        public async Task<Entity> GetEntityAsync(Guid entityId)
        {
            var query = _context.Entities.Where(Entity => Entity.Id.Equals(entityId));

            if (!query.Any())
                return null;

            return query.First();
        }

        public async Task<bool> DeleteEntityAsync(Guid entityId)
        {
            var entity = await GetEntityAsync(entityId);

            if (entity == null)
                return false;

            _context.Entities.RemoveRange(entity);

            var saveResult = await _context.SaveChangesAsync();

            return !(saveResult == 1);
        }

        public bool HasEntity(Guid entityId)
        {
            var query = _context.Entities.Where(entity => entity.Id.Equals(entityId));

            return query.Any();
        }

        public IEnumerable<Entity> GetEntities()
        {
            return _context.Entities;
        }

        public async Task<bool> DeleteEntitiesAsync(IEnumerable<Entity> entity)
        {
            _context.Entities.RemoveRange(entity);

            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }
    }
}
