using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Qilin.Service.Migrations
{
    /// <inheritdoc />
    public partial class SimplifiedEntityModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Entities");

            migrationBuilder.DropColumn(
                name: "Hash",
                table: "Entities");

            migrationBuilder.DropColumn(
                name: "LastModificationDate",
                table: "Entities");

            migrationBuilder.RenameColumn(
                name: "Value",
                table: "Entities",
                newName: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Entities",
                newName: "Value");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "CreatedDate",
                table: "Entities",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddColumn<string>(
                name: "Hash",
                table: "Entities",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "LastModificationDate",
                table: "Entities",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));
        }
    }
}
