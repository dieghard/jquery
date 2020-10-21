 //recorrer una tabla y verificar si la fila donde hay um chek esta check true o false
 $('#tabla').find('input[type="checkbox"]').each(function() { // recorro los rows de la tabla, solo los rows que tengan checkbox
 
        if ($(this).is(':checked')) {
            $(this).attr('checked', false); // si esta chequeado lo deschequeamos
            checkContadosTrue += 1;
        } else {
            $(this).attr('checked', true); // si esta deschequeado lo chequeamos
            checkContadosFalse += 1;
        }

    });
