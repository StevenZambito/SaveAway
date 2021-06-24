using System.ComponentModel.DataAnnotations;

namespace SaveAway.Models
{
    public class Goal
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Emoji { get; set; }
        [Required]
        public int TargetAmount { get; set; }
        [Required]
        public int SavedAmount { get; set; }

    }
}