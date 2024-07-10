using Microsoft.EntityFrameworkCore;
using PQGrid.Models;

namespace PQGrid.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options):base(options)
        {
                
        }
        public DbSet<Employee> Employees { get; set; }
    }
}
