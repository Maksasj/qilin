using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class QueryController : Controller
    {
        private QilinDbContext _context;

        public QueryController(QilinDbContext context)
        {
            _context = context;
        }

        class TagMatch
        {
            public Tag Tag { get; set; }
            public int TitleMatchScore { get; set; }
        }

        [HttpGet]
        [Route("SearchTag")]
        public async Task<List<Tag>> SearchTag(string searchTitle)
        {
            var lowerCase = searchTitle.ToLower();

            var query = _context.Tags
                .Select(t => new TagMatch
                {
                    Tag = t,
                    TitleMatchScore = EF.Functions.Like(t.Title.ToLower(), $"%{lowerCase}%") ? 1 : 0,
                })
                .Where(t => t.TitleMatchScore > 0)
                .OrderByDescending(t => t.TitleMatchScore)
                .ThenBy(t => t.Tag.Title)
                .Select(t => t.Tag)
                .ToList();

            return query;
        }
    }
}
