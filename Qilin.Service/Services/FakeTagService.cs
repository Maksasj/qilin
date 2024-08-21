using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public class FakeTagService : ITagService
    {
        public async Task<Tag[]> GetTagsAsync()
        {
            var onePiece = new Tag
            {
                Id = Guid.NewGuid(),
                Title = "One Piece",
                Description = "This is a test one piece tag"
            };

            var artWork = new Tag
            {
                Id = Guid.NewGuid(),
                Title = "Art work"
            };

            return new Tag[] { onePiece, artWork };
        }

        public async Task<IActionResult> CreateTag(string tagTitle, string? tagDescription)
        {
            return new OkObjectResult(null);
        }

        public async Task<IActionResult> DeleteTag(Guid tagId)
        {
            return new OkObjectResult(null);
        }
    }
}
