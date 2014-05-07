test
<?php 
$conexion=mysql_connect("localhost","root","root") or die ("No se pudo conectar");
	mysql_select_db("telmex", $conexion) or die ("No se puede seleccionar la base de datos");

//if(isset($_POST['a'])){
$id=1;//$_POST['a'];
//}
$consulta=mysql_query("SELECT * FROM televisores");
if($id=mysql_fetch_array($consulta)){
	echo "COMPUTADORAS! <br/>";
?>	
<table width='100' border='1'>
		  <tr>
			<td>Nombre</td>
			<td><?php echo $id['nombre'];?></td>
		  </tr>
          <tr>
			<td>Precio de Contado</td>
			<td><?php echo $id['contado'];?></td>
		  </tr>
		  <tr>
          <tr>
			<td>Precio Regular</td>
			<td><?php echo $id['regular'];?></td>
		  </tr>
          <tr>
			<td>A 12 Meses</td>
			<td><?php echo $id['12meses'];?></td>
		  </tr><tr>
			<td>A 24 Meses</td>
			<td><?php echo $id['24meses'];?></td>
		  </tr><tr>
			<td>A 36 Meses</td>
			<td><?php echo $id['36meses'];?></td>
		  </tr>
		  <tr>
			<td>A 48 Meses</td>
			<td><?php echo $id['48meses'];?></td>
		  </tr>
		  <tr>
			<td>Disco Duro</td>
			<td><?php echo $id['discoduro'];?></td>
		  </tr>
		  <tr>
			<td>Memoria RAM</td>
			<td><?php echo $id['ram'];?></td>
		  </tr>
		  <tr>
			<td>Sistema Operativo</td>
			<td><?php echo $id['sistema'];?></td>
		  </tr>
		</table>

<?php
	}else{
		echo "id no existe!";
		}

	
?>