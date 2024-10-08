﻿using Microsoft.EntityFrameworkCore;
using Qilin.Service.Models;

namespace Qilin.Service.Data
{
    public class QilinDbContext : DbContext 
    {
        // Tags
        public DbSet<Tag> Tags { get; set; }       
        public DbSet<TagAlias> TagAliases { get; set; }
        public DbSet<TagRelation> TagRelations { get; set; }

        // Tag styles
        public DbSet<TagStyle> TagStyles { get; set; }
        public DbSet<TagStyleRelation> TagStyleRelations { get; set; }

        // Entities
        public DbSet<Entity> Entities { get; set; }       
        public DbSet<EntityTagRelation> EntityTagRelations { get; set; }

        public QilinDbContext(DbContextOptions<QilinDbContext> options) : base(options)
        {

        }
    }
}
