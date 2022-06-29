using ApiEcommerce.Data;
using ApiEcommerce.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiEcommerce.Controllers;
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    //public ActionResult<List<Product>> GetProducts()
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        //var products = _context.Products.ToList();
        return await _context.Products.ToListAsync();
        //return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        return  await _context.Products.FindAsync(id);

    }

}
