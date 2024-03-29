﻿using BackAgenciaWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BackAgenciaWebApi.Data
{
    public class APIDbContext: DbContext
    {
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options) {
            
        }

        public DbSet<Cliente> Cliente { get; set; } 
    }
}
