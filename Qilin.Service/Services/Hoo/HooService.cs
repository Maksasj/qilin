using System.Diagnostics;
using System.Runtime.CompilerServices;
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

        private Tag _fileTag;
        private Tag _oneDrive;
        private Tag _googleDrive;
        private Tag _webFile;

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
            _fileTag = await _tagRepository.GetTagByTitleAsync("File");
            _oneDrive = await _tagRepository.GetTagByTitleAsync("OneDrive");
            _googleDrive = await _tagRepository.GetTagByTitleAsync("GoogleDrive");
            _webFile = await _tagRepository.GetTagByTitleAsync("WebFile");

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

                await TagEntity(file.Id, file.SourceType);
            }
        }

        private async Task TagEntity(Guid entityId, string sourceType)
        {
            _relationRepository.TagEntityAsync(entityId, _fileTag.Id);

            switch (sourceType)
            {
                case "OneDrive":
                    await _relationRepository.TagEntityAsync(entityId, _oneDrive.Id);
                    break;
                case "GoogleDrive":
                    await _relationRepository.TagEntityAsync(entityId, _googleDrive.Id);
                    break;
                case "WebFile":
                    await _relationRepository.TagEntityAsync(entityId, _webFile.Id);
                    break;
                default:
                    throw new UnreachableException("Source type is not implemented");
            };
        }

        public async Task ClearCacheAsync()
        {
            await _entityRepository.DeleteEntitiesAsync(_entityRepository.GetEntities());
        }
    }
}
