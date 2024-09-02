using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Qilin.Service.Migrations
{
    /// <inheritdoc />
    public partial class AddedTagStyles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TagStyles",
                table: "TagStyles");

            migrationBuilder.RenameColumn(
                name: "TagId",
                table: "TagStyles",
                newName: "StyleTitle");

            migrationBuilder.AddColumn<Guid>(
                name: "StyleId",
                table: "TagStyles",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_TagStyles",
                table: "TagStyles",
                column: "StyleId");

            migrationBuilder.CreateTable(
                name: "TagStyleRelations",
                columns: table => new
                {
                    TagId = table.Column<Guid>(type: "TEXT", nullable: false),
                    StyleId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TagStyleRelations", x => new { x.TagId, x.StyleId });
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TagStyleRelations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TagStyles",
                table: "TagStyles");

            migrationBuilder.DropColumn(
                name: "StyleId",
                table: "TagStyles");

            migrationBuilder.RenameColumn(
                name: "StyleTitle",
                table: "TagStyles",
                newName: "TagId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TagStyles",
                table: "TagStyles",
                column: "TagId");
        }
    }
}
