﻿using Microsoft.AspNetCore.Identity;
using Microsoft.VisualBasic;
using Newtonsoft.Json;
using Qilin.Service.Models;
using Qilin.Service.Repository;
using Qilin.Service.Services;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service
{
    public class SeedData
    {
        public static async Task InitializeAsync(ILogger logger, IServiceProvider services)
        {
            logger.LogInformation("Started checking for initial database values");

            var tagRepository = services.GetRequiredService<ITagRepository>();
            var relationRepository = services.GetRequiredService<IRelationRepository>();
            var tagStyleRepository = services.GetRequiredService<ITagStyleRepository>();

            await EnsureDefaultTagStyles(logger, tagStyleRepository);
            await EnsureGenericTagsAsync(logger, tagRepository);

            await EnsureHooTagsAsync(logger, tagRepository);
            await EnsureHooSourceTagsAsync(logger, tagRepository);
            await EnsureHooTagRelationsAsync(logger, tagRepository, relationRepository);
        }

        private static async Task EnsureDefaultTagStyles(ILogger logger, ITagStyleRepository tagStyleRepository)
        {
            if ((await tagStyleRepository.GetStyleAsync("Default")) == null)
            {
                await tagStyleRepository.CreateStyleAsync(new TagStyle
                {
                    Id = Guid.NewGuid(),
                    StyleTitle = "Default",
                    Color = "#969696",
                    Emoji = "",
                });
            }
        }

        private static async Task EnsureGenericTagsAsync(ILogger logger, ITagRepository tagRepository)
        {
            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("File")).Any())
            {
                logger.LogWarning("'File' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "File",
                    Description = "This is some sort of file",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }
        }

        private static async Task EnsureHooTagsAsync(ILogger logger, ITagRepository tagRepository)
        {
            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("Documents")).Any())
            {
                logger.LogWarning("'Documents' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "Documents",
                    Description = "This is some sort of file",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }

            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("Pictures")).Any())
            {
                logger.LogWarning("'Pictures' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "Pictures",
                    Description = "This is some sort of file",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }

            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("Music")).Any())
            {
                logger.LogWarning("'Documents' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "Music",
                    Description = "This is some sort of file",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }

            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("Videos")).Any())
            {
                logger.LogWarning("'Videos' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "Videos",
                    Description = "This is some sort of file",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }
        }

        private static async Task EnsureHooSourceTagsAsync(ILogger logger, ITagRepository tagRepository)
        {
            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("GoogleDrive")).Any())
            {
                logger.LogWarning("'GoogleDrive' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "GoogleDrive",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }

            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("OneDrive")).Any())
            {
                logger.LogWarning("'OneDrive' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "OneDrive",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }

            if (!tagRepository.GetTags().Where(tag => tag.Title.Equals("WebFile")).Any())
            {
                logger.LogWarning("'WebFile' tag is not present in database. Trying to create new");

                await tagRepository.CreateTagAsync(new Tag
                {
                    Id = Guid.NewGuid(),
                    Title = "WebFile",
                    CreatedDate = DateTimeOffset.Now,
                    LastModificationDate = DateTimeOffset.Now
                });
            }
        }
        
        private static async Task EnsureHooTagRelationsAsync(ILogger logger, ITagRepository tagRepository, IRelationRepository relationRepository)
        {
            var file = await tagRepository.GetTagByTitleAsync("File");

            var documentsTag = await tagRepository.GetTagByTitleAsync("Documents");
            var picturesTag = await tagRepository.GetTagByTitleAsync("Pictures");
            var musicTag = await tagRepository.GetTagByTitleAsync("Music");
            var videosTag = await tagRepository.GetTagByTitleAsync("Videos");

            if (!relationRepository.TagRelationExist(file.Id, documentsTag.Id))
                await relationRepository.TagTagAsync(file.Id, documentsTag.Id);

            if (!relationRepository.TagRelationExist(file.Id, picturesTag.Id))
                await relationRepository.TagTagAsync(file.Id, picturesTag.Id);
        
            if (!relationRepository.TagRelationExist(file.Id, musicTag.Id))
                await relationRepository.TagTagAsync(file.Id, musicTag.Id);

            if (!relationRepository.TagRelationExist(file.Id, videosTag.Id))
                await relationRepository.TagTagAsync(file.Id, videosTag.Id);
        }
    }
}
