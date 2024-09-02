using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Qilin.Service.Migrations
{
    /// <inheritdoc />
    public partial class FixedTagStyles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TagStyleRelations",
                table: "TagStyleRelations");

            migrationBuilder.RenameColumn(
                name: "StyleId",
                table: "TagStyles",
                newName: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TagStyleRelations",
                table: "TagStyleRelations",
                column: "TagId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TagStyleRelations",
                table: "TagStyleRelations");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "TagStyles",
                newName: "StyleId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TagStyleRelations",
                table: "TagStyleRelations",
                columns: new[] { "TagId", "StyleId" });
        }
    }
}
