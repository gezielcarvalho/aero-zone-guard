
using AeroZoneGuard.Server.Data;
using AeroZoneGuard.Server.Interfaces;
using AeroZoneGuard.Server.Repositories;
using Microsoft.EntityFrameworkCore;

namespace AeroZoneGuard.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add classes to the DI container
            builder.Services.AddScoped<ISubmissionDocumentRepository, SubmissionDocumentRepository>();
            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddScoped<AppDbContext>();
            builder.Services.AddDbContext<AppDbContext>(options =>
            {
                options.UseInMemoryDatabase("AeroZoneGuard");
            });

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Default", builder =>
                {
                    builder
                    .WithOrigins("https://localhost:4200")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            app.UseCors("Default");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
