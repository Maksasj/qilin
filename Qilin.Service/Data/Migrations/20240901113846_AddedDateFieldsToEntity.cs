using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Qilin.Service.Migrations
{
    /// <inheritdoc />
    public partial class AddedDateFieldsToEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "AddedToDbDate",
                table: "Entities",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "LastModificationDate",
                table: "Entities",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddedToDbDate",
                table: "Entities");

            migrationBuilder.DropColumn(
                name: "LastModificationDate",
                table: "Entities");
        }
    }
}
