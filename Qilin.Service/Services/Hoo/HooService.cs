using System.Diagnostics;
using Newtonsoft.Json;
using Qilin.Service.Controllers;
using Qilin.Service.Models;
using Qilin.Service.Models.Hoo;
using Qilin.Service.Repository;
using Qilin.Service.Services.Hoo.Client;

namespace Qilin.Service.Services.Hoo
{
    public class HooService : IHooService
    {
        private readonly ILogger<HooService> _logger;
        private readonly IHooClient _hooClient;

        private readonly IEntityRepository _entityRepository;
        private readonly ITagRepository _tagRepository;
        private readonly IRelationRepository _relationRepository;

        public HooService(
            ILogger<HooService> logger, 
            IEntityRepository entityRepository,
            ITagRepository tagRepository,
            IRelationRepository relationRepository
            )
        {
            _logger = logger;
            _hooClient = new HooClient();

            _entityRepository = entityRepository;
            _tagRepository = tagRepository;
            _relationRepository = relationRepository;
        }

        public async Task SyncAsync()
        {
            var fileTag = await _tagRepository.GetTagByTitleAsync("File");

            await foreach (var file in _hooClient.GetFilesAsync())
            {
                if (_entityRepository.HasEntity(file.Id))
                    return;

                await _entityRepository.CreateEntityAsync(new Entity
                {
                    Id = file.Id,
                    Type = "HooFile",
                    Name = file.Name,
                    AddedToDbDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });

                _relationRepository.EntityRelationExist(file.Id, fileTag.Id);
            }
        }

        public async Task ClearCacheAsync()
        {
            await _entityRepository.DeleteEntitiesAsync(_entityRepository.GetEntities());
        }
    }
}
