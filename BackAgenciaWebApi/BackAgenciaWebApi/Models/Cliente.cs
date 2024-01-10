using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace BackAgenciaWebApi.Models
{
    [Table("Cliente")]
    public class Cliente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Required]
        [StringLength(50)]
        public String nome { get; set; }
        [Required]
        [StringLength(70)]
        public String Endereco { get; set; }
        [Required]
        [StringLength(15)]
        public String Cpf { get; set; }
        [Required]
        public int idade { get; set; }
        [Required]
        [StringLength(100)]
        public String Email { get; set; }
        [Required]
        [StringLength(15)]
        public String senha { get; set; }
    }
}
