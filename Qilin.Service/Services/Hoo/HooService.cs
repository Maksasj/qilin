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
        private readonly IEntityRepository _entityRepository;
        private readonly IHooClient _hooClient;

        public HooService(ILogger<HooService> logger, IEntityRepository entityRepository)
        {
            _logger = logger;
            _entityRepository = entityRepository;
            _hooClient = new HooClient();
        }

        public async Task SyncAsync()
        {
            await foreach (var file in _hooClient.GetFilesAsync())
            {
                await _entityRepository.CreateEntityAsync(new Entity
                {
                    Id = file.Id,
                    Type = "HooFile",
                    Name = file.Name,
                });
            }
        }

        public async Task ClearCacheAsync()
        {
            await _entityRepository.DeleteAllEntitiesAsync();
        }
    }
}
