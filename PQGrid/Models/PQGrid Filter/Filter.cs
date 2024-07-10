namespace PQGrid.Models.PQGrid_Filter
{
        public class Filter
        {
            public string type { get; set; }
            public string condition { get; set; }
            public string[] listeners { get; set; }
            public string[] prepend { get; set; }
            public string valueIndx { get; set; }
            public string labelIndx { get; set; }
        }
}
