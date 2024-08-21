using Microsoft.EntityFrameworkCore;
using Qilin.Service.Models;

namespace Qilin.Service.Data
{
    public class QilinDbContext : DbContext 
    {
        public DbSet<Tag> Tags { get; set; }       

        public QilinDbContext(DbContextOptions<QilinDbContext> options) : base(options)
        {

        }
    }
}
