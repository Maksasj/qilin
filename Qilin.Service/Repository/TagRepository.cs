﻿using Microsoft.EntityFrameworkCore;
using Qilin.Service.Controllers;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class TagRepository : ITagRepository
    {
        private readonly ILogger<TagRepository> _logger;
        private readonly QilinDbContext _context;

        public TagRepository(ILogger<TagRepository> logger, QilinDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IEnumerable<Tag> GetTags()
        {
            return _context.Tags.ToList();
        }

        public async Task<bool> CreateTag(Tag tag)
        {
            _context.Tags.Add(tag);
            
            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }

        public async Task<bool> DeleteTag(Guid tagId)
        {
            await _context.Tags.Where(tag => tag.Id.Equals(tagId)).ExecuteDeleteAsync();

            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }
    }
}
