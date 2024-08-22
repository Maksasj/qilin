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

        public IEnumerable<Entity> GetEntities()
        {
            return _context.Entities.ToList();
        }

        public async Task<bool> CreateEntity(Entity entity)
        {
            _context.Entities.Add(entity);

            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }

        public async Task<bool> DeleteEntity(Guid tagId)
        {
            await _context.Entities.Where(entity => entity.Id.Equals(tagId)).ExecuteDeleteAsync();

            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }
    }
}
