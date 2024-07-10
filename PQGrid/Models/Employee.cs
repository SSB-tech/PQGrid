using System.ComponentModel.DataAnnotations;

namespace PQGrid.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public string ContactNo { get; set; }
        public bool isActive { get; set; }

    }
}
