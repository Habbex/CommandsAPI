using Microsoft.EntityFrameworkCore.Migrations;

namespace Commander.Migrations
{
    public partial class NewSyntaxColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Syntax",
                table: "Commands",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Syntax",
                table: "Commands");
        }
    }
}
